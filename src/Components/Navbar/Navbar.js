function Navbar() {
    return (
      <nav class="navbar navbar-expand-custom navbar-mainbg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emblem_of_India_%28Government_Gazette%29.svg/1200px-Emblem_of_India_%28Government_Gazette%29.svg.png" alt="" />
        <a class="navbar-brand navbar-logo" href="#">
          Government of India | Ministry of Labour
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">     
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
              Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;