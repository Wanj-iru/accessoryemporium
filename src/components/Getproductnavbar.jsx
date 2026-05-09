import React from 'react'

const Getproductnavbar = () => {
    return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- a nav with the navbar content  --> */}
                <nav class="navbar  navbar-expand-md mb-3" style={{ backgroundColor: "#3ec5c5ff" }}>
                    {/* <a href="navbar" class="navbar-brand   " style={{ color: "lemonchiffon" }}>Accessory Emporium
                        <p class="mb-0" style={{fontSize:"x-small"}}>Shine with unforgettable  brightness!</p>
                    </a> */}
                    <button class=" navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse " id="navbarcollapse">
                        <div class="navbar-nav  text-center">
                           <a href="/men" class="nav-link" style={{ color: "lemonchiffon" }}>Men's</a>
                            <a href="/women" class="nav-link" style={{ color: "lemonchiffon" }}>Women's</a>
                            <a href="/aesthetic" class="nav-link" style={{ color: "lemonchiffon" }}>Aesthetic</a>
                            <a href="/traditional" class="nav-link" style={{ color: "lemonchiffon" }}>Traditional</a>
                             {/* <a href="/signin" class="nav-link" style={{ color: "lemonchiffon" }}>Sign In</a>  */}
                            {/* Search form  */}
                            {/* <div class="col-md-12 w-100 "> */}
                            {/* <form class="d-flex navbar-form mt-3 mt-lg-0 w-100" role="search" style={{backgroundColor:"bisque"}} >
                                <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-info" type="submit">Search</button>
                            </form>
                            </div> */}
                        </div>
                    </div>

                </nav>
            </div>
        </section>
    )
}

export default Getproductnavbar