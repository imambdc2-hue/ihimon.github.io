/* ACTIVE NAV */

nav a.active{
    color:#ffffff;
    font-weight:700;
}

/* SCROLL REVEAL */

.about,
.goals,
.youtube,
.facebook,
.social,
.contact{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

.show{
    opacity:1 !important;
    transform:translateY(0) !important;
}
