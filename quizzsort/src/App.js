import './App.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react'

const rawData = [
  { name: "iqra", age: 11, city: "lahore", movie: "World war z" },
  { name: "saba", age: 12, city: "rawalpindi", movie: "Goddzila" },
  { name: "misbah", age: 13, city: "lahore", movie: "Dayshift" },
  { name: "asmavia", age: 14, city: "islamabad", movie: "anaconda" },
  { name: "kainat", age: 15, city: "sialkot", movie: "james bonds" },
]

function App() {
  const [currentPage, setCurrentPage] = useState(1) //for pagination
  const [data, setData] = useState(rawData)

  console.log("data is", data)
  const postPerPage = 2
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentItems = data.slice(indexOfFirstPost, indexOfLastPost)
  const paginationLength = Math.ceil(data.length / postPerPage)


  const sortName = (event) => {
    const value = event.target.value
    if (value === 'nameASC') {
      rawData.sort((a, b) => {
        let fa = a.name.toLowerCase()
        let fb = b.name.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      console.log("sorted data is", rawData)
      setData(rawData)
    } else {
      rawData.sort((a, b) => {
        let fa = a.name.toLowerCase()
        let fb = b.name.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      const reverse = rawData.reverse()
      console.log("sorted data is", reverse)
      setData(reverse)
    }
  }

  const sortCity = (event) => {
    const value = event.target.value
    if (value === 'cityASC') {
      rawData.sort((a, b) => {
        let fa = a.city.toLowerCase()
        let fb = b.city.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      console.log("sorted data is", rawData)
      setData(rawData)
    } else {
      rawData.sort((a, b) => {
        let fa = a.city.toLowerCase()
        let fb = b.city.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      const reverse = rawData.reverse()
      console.log("sorted data is", reverse)
      setData(reverse)
    }
  }

  const sortMovie = (event) => {
    const value = event.target.value
    if (value === 'movieASC') {
      rawData.sort((a, b) => {
        let fa = a.movie.toLowerCase()
        let fb = b.movie.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      console.log("sorted data is", rawData)
      setData(rawData)
    } else {
      rawData.sort((a, b) => {
        let fa = a.movie.toLowerCase()
        let fb = b.movie.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      const reverse = rawData.reverse()
      console.log("sorted data is", reverse)
      setData(reverse)
    }
  }

  const sortAge = (event) => {
    const value = event.target.value
    if (value === 'ageASC') {
      rawData.sort((a, b) => {
        return (a.age - b.age)
      });
      console.log("sort age", rawData)
      setData(rawData)

    } else {
      rawData.sort((a, b) => {
        return a.age - b.age;
      });
      console.log("sort age", rawData)
      const reverse = rawData.reverse()
      setData(reverse)

    }

  }

  const handleChange = (event, value) => {
    setCurrentPage(value)
  };
  return (
    <div>

      <div id="container">
        <div>
          <button className='b1' value="nameASC" onClick={sortName}>Sort by name  ASC</button>
          <button className='b1' value="nameDESC" onClick={sortName}>Sort by name  DESC</button>
        </div>
        <div>
          <button className='b2' value="AgeASC" onClick={sortAge} >Sort by age ASC</button>
          <button className='b22' value="AgeDESC" onClick={sortAge}>Sort by age DESC</button>
        </div>
        <div>
          <button className='b3' value="cityASC" onClick={sortCity}>Sort by city ASC</button>
          <button className='b33' value="cityDESC" onClick={sortCity}>Sort by city DESC</button>
        </div>
        <div>
          <button className='b4' value="movieASC" onClick={sortMovie}>Sort by movie ASC</button>
          <button className='b44' value="movieDESC" onClick={sortMovie}>Sort by movie DESC</button>
        </div>
      </div>


      <table width='100%'>
        <tr>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }} >Name</th>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Age</th>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>City</th>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Movie</th>
        </tr>
        {
          currentItems.map((value, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.name}
                </td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.age}
                </td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.city}
                </td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.movie}
                </td>
              </tr>
            )
          })
        }
      </table>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        <Stack spacing={2}>
          <Pagination count={paginationLength} siblingCount={0} onChange={handleChange} variant="outlined" color="success" />
        </Stack>
      </div>
    </div >
  );
}

export default App;
