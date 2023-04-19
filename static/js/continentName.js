window.onload = function () {
    const urlSegments = window.location.pathname.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    const continent = lastSegment.split('.')[0];
    randImg(continent);
}
