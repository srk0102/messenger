import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#00bfa5'}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link fw-bold" href="#">Login</a>
              <a class="nav-link fw-bold" href="#">Signup</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
