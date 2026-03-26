import React from 'react'

const Navbar = () => {
    return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with the navbar content  --> */}
                <nav class="navbar  navbar-expand-md " style={{ backgroundColor: "#186161" }}>
                    <a href="navbar" class="navbar-brand   " style={{ color: "lemonchiffon" }}>Accessory Emporium</a>
                    <button class=" navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link" style={{ color: "lemonchiffon" }}>Home</a>
                            <a href="/addproduct" class="nav-link" style={{ color: "lemonchiffon" }}>Add product</a>
                            <a href="/signup" class="nav-link" style={{ color: "lemonchiffon" }}>Sign Up</a>
                            <a href="/signin" class="nav-link" style={{ color: "lemonchiffon" }}>Sign In</a>
                            {/* Search form  */}
                            <form class="d-flex navbar-form mt-3 mt-lg-0 w-50" role="search" >
                                <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-info" type="submit">Search</button>
                            </form>
                        </div>
                    </div>

                </nav>
            </div>
        </section>
    )
}

export default Navbar