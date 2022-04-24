const breadcrumbTemplate = (links) => {
    return `
    <section id="breadcumb">
        <div class="container-fluid wrap_breadcumb py-2">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="{{ url('/') }}">
                            <img src="../assets/img/arrow-back.svg" alt="back icon"
                                style="width: 24px; height: 24px; margin-right: 20px;">
                        </a>
                    </li>

                    

                        ${links.map((link, index) => {
        return `
                            <li class="breadcrumb-item ${index === links.length - 1 ? 'active' : ''}">
                                <a href="#" style="color: #263840; text-decoration: none; ${index === links.length - 1 ? 'font-weight: 700; ' : ''}">
                                    ${link}
                                </a >
                            </li > `;

    })
        }

                </ol>
            </nav>
        </div>
    </section>
    `;
}
const navbarTemplate = (page) => {
    return `
    <nav class="my_nav navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom py-2">
        <div class="container-fluid wrap_navbar">

            <a style="font-size: 16px;" class="navbar-brand" href="/">
                <img style="height: 50px; width: 42px" src="./assets/img/logoSmall.svg" alt="Logo IMI Jabar">
                <p style="margin: 0; padding:0; display:inline-block; vertical-align: middle; width: 100%; max-width: 160px;white-space:normal; font-size: 12px; font-weight: 700"
                    class="navbar-text">Ikatan Motor Indonesia (IMI) Provinsi Jawa Barat</p>
            </a>
            <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mx-auto navbar_list">
                    <li class="nav-item mx-lg-2 dropdown">
                        <a class="nav-link dropdown-toggle ${page === "tentangIMI" ? 'active' : ''}" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tentang IMI
                        </a>
                        <div class="dropdown-menu mb-3" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/about.html">Organisasi</a>
                            <a class=" dropdown-item" href="/mobil-klub.html">Mobil</a>
                            <a class="dropdown-item" href="/motor-klub.html">Motor</a>
                            <a class="dropdown-item" href="/mobility-klub.html">Mobility</a>
                        </div>
                    </li>
                    <li class="nav-item mx-lg-2">
                        <a class="nav-link ${page === "berita" ? 'active' : ''}" href="/list-berita.html">Berita</a>
                    </li>
                    <li class="nav-item mx-lg-2">
                        <a class="nav-link ${page === "acara" ? 'active' : ''}" href="/event">Acara</a>
                    </li>
                    <li class="nav-item mx-lg-2">
                        <a class="nav-link ${page === "gallery" ? 'active' : ''}" href="/galeri">Galleri</a>
                    </li>
                    <li class="nav-item mx-lg-2 dropdown">
                        <a class="nav-link dropdown-toggle ${page === "pendaftaran" ? 'active' : ''}" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pendaftaran
                        </a>
                        <div class="dropdown-menu mb-3" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/registrasi-kis-individu.html">KIS</a>

                            <a class="dropdown-item" href="/registrasi-kta.html">KTA</a>

                            <a class="dropdown-item" href="/registrasi-klub.html">Klub</a>

                            <a class="dropdown-item" href="/registrasi-event.html">Event</a>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto navbar_list">
                    <li class="nav-item mr-lg-3">
                        <div class="switch_language">
                            <input type="checkbox" class="checkbox_switch_language" id="chk" />
                            <label class="label_switch_language" for="chk">
                                <div class="ball"></div>
                                <div class="flags">
                                    <img class="ball_us flag" src="./assets/img/flag-us.svg" alt="us flag">
                                    <img class="ball_id flag" src="./assets/img/flag-indonesia.svg" alt="id flag">
                                </div>
                            </label>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
    </nav>
    `;
}


const footerTemplate = () => {
    return `

    <footer class="position-relative border-top border-bottom">
        <div class="container-fluid content_footer">

            <div class="row my-auto mx-0 justify-content-md-between h-100">
                <div class="col-12 col-lg-5  mb-3 mb-lg-0 align-self-center">
                    <div class="row mx-0">
                        <div class="col-12 col-sm-3">
                            <img style="height: 75px; width: 57px" class="d-block mb-4 logo_footer"
                                src="./assets/img/logo_footer.svg" alt="logo imi jawa barat">
                        </div>
                        <div class="footer_ttd col-12 col-sm-9 text-sm-right text-center position-relative">
                            <p>IMI Jabar Juara</p>
                            <p class="text_ttd_footer">IMI Jawa Barat</p>
                            <img class="position-absolute line_border" src="./assets/img/line_blue.svg" alt="line blue">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col sosial_media_footer">

                            <a class="text-decoration-none" href="#"><i class="fa-brands fa-facebook fa-xl"></i></a>
                            &nbsp;&nbsp;
                            <a class="text-decoration-none" href="#"><i class="fa-brands fa-facebook fa-xl"></i></a>
                            &nbsp;&nbsp;
                            <a class="text-decoration-none" href="#"><i class="fa-brands fa-facebook fa-xl"></i></a>
                            &nbsp;&nbsp;
                            <a class="text-decoration-none" href="#"><i class="fa-brands fa-facebook fa-xl"></i></a>

                            <!-- <img class="mr-3" src="{{ asset('public/images') }}/icon_globe_web.svg" alt="web imi
                            jabar">
                            <img class="mr-3" src="{{ asset('public/images') }}/icon_facebook.svg"
                                alt="facebook imi jabar">
                            <img class="mr-3" src="{{ asset('public/images') }}/icon_instagram.svg"
                                alt="instagram imi jabar"> -->

                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-12 col-lg-3">
                    <div class="address_footer">
                        <h4 style="font-weight: 700;">Kantor Pusat</h4>
                        <p style="font-weight: 500;">
                            Jl. Batununggal Indah Raya No.81, Batununggal, Kec. Bandung Kidul, Kota Bandung, Jawa Barat
                            40267.
                        </p>
                    </div>
                    <div class="contact_footer">
                        <h4 style="font-weight: 700;">Hubungi Kami</h4>
                        <p style="font-weight: 500;">ayocode.id@gmail.com
                            <br />081234567890
                        </p>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-12 col-lg-2">
                    <h4 style="font-weight: 700;">IMI Jabar
                    </h4>
                    <ul style="font-weight: 500;" class="sitemap_footer">
                        <li><a href="/about">Tentang IMI Jabar</a></li>
                        <li><a href="/news">Berita</a></li>
                        <li><a href="/gallery">Galeri</a></li>
                        <li><a href="/event">Acara</a></li>
                        <li><a href="/registration/kis">Pendaftaran KIS</a></li>
                        <li><a href="/registration/kta">Pendaftaran KTA</a></li>
                        <li><a href="/registration/club">Pendaftaran Klub</a></li>
                    </ul>

                </div>
            </div>

        </div>

        </div>
        <img class="position-absolute background_footer" src="./assets/img/background_footer.png"
            alt="background footer">
    </footer>

    <div class="credit">
        <div class="container text-center p-3 wrap_credit">
            <p class="my-auto">© Copyright 2022 IMI Jawa Barat | Web Developed by Rumah Koding X Ayocode.id | All Right
                Reserved</p>
        </div>
    </div>
    `;
}


export {
    breadcrumbTemplate,
    navbarTemplate,
    footerTemplate
}