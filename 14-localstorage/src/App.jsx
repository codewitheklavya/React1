import React from 'react'

const App = () => {
  // localStorage.clear();
  // localStorage.setItem('user','Eklavya singh');
  // localStorage.setItem('theme', 'dark')

  // const user = localStorage.getItem('user');
  // const theme = localStorage.getItem('theme');
  // console.log(user,theme)
  // console.log(theme)

  // localStorage.clear()

  const user = {
    user: "eklavya",
    age: 20,
    city: "jamshedpur"
  }

  localStorage.setItem('user',JSON.stringify(user))

  const usere =  JSON.parse(localStorage.getItem('user'))

  console.log(usere)


  return (
    <div>
      App
    </div>
  )
}

export default App
