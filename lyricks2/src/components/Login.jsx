import React from 'react'

const Login = () => {

  function handleClick() {
    const clientId = "b9a30f25f6ec4b03a7838bfca0ed3039"
    const redirectUrl = 'http://localhost:5173/'
    const apiUrl = "http://accounts.spotify.com/authorize"
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ]
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`
  }

  return (
    <div>
      <button onClick={handleClick} >Logar spotify</button>
    </div>
  )
}

export default Login