import React, { useState, useEffect } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectStudent, setSelectedStudent] = useState(null)


  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:3000/students?name=${query}`)
      const data = await res.json()
      setResults(data)
      console.log("Data", data)
    }

    let debounceTimer
    if (query.length > 3) {
      debounceTimer = setTimeout(() => {
        getData()
      }, 500)
    }
    else {
      setResults([])
      setSelectedStudent(null)
    }

    return () => clearTimeout(debounceTimer)
  }, [query])


  const handleSearch = (value) => {
    setQuery(value);
  };


  const handlCLick = (item) => {
    console.log(item.length)
    setSelectedStudent(item)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.studentDetailsHeader}>Student Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
        style={styles.input}
      />
      {(results?.length > 0) ? (
        <ul style={styles.resultsList}>
          {results?.map((item) => (
            <li key={item.rollNumber} style={styles.resultItem} onClick={() => handlCLick(item)}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <h4 style={styles.studentDetailsHeader}>{query?.length > 3 ? "No data" : ""}</h4>

      )}
      {selectStudent && <div style={styles.studentDetails}>
        <h3 style={styles.studentDetailsHeader}>Student Details</h3>
        <p style={styles.studentDetailsLabel}> Name:{selectStudent?.name}</p>
        <p style={styles.studentDetailsLabel}> Class: {selectStudent?.class}</p>
        <p style={styles.studentDetailsLabel}> Roll Number: {selectStudent?.rollNumber}</p>

      </div>}
    </div >
  );
};

const styles = {
  container: {
    border: '1px solid black',
    padding: '1em'
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    width: '95%',
    borderRadius: '4px',
    flex: '1',
    marginRight: '10px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  resultsList: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '10px',
  },
  resultItem: {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '5px',
    backgroundColor: '#f9f9f9',
  },
  studentDetails: {
    border: "1px solid black",
    width: '50%',
    margin: 'auto'
  },
  studentDetailsLabel: {
    marginLeft: '0.5em',
    marginBottom: '0.2em',
    marginTop: '0.3em'
  },
  studentDetailsHeader: {
    textAlign: 'center',
    marginTop: '0.3em',
    textDecoration: 'underline'
  }
};

export default App;
