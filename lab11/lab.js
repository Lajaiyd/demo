document.addEventListener('DOMContentLoaded', function () {
    const imgManipulated = document.getElementById('imgManipulated');
    const figcaption = imgManipulated.querySelector('figcaption');
    const resetButton = document.getElementById('resetFilters');
    const sliders = document.querySelectorAll('sliders');
    const thumbBox = document.getElementById('thumbBox');

    // Event listener for thumbnail images
    thumbBox.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            const src = event.target.src.replace('small', 'medium');
            imgManipulated.querySelector('img').src = src;

            const alt = event.target.alt;
            const title = event.target.title;
            figcaption.innerHTML = `<em>${alt}</em> <br>${title}`;
        }
    });

    // Event listener for range sliders

    sliders.forEach(function (slider) {
        const numElement = document.getElementById(`num${slider.id.charAt(6).toUpperCase()}${slider.id.slice(7)}`);
    
        slider.addEventListener('input', function () {
            const filterValue = sliders
                .map((slider) => {
                    const value = slider.value;
                    const unit = slider.id === 'sliderHue' ? 'deg' : '%';
                    numElement.textContent = value;
                    return `${slider.id}(${value}${unit})`;
                })
                .join(' ');
    
            imgManipulated.querySelector('img').style.filter = filterValue;
        });
    });

    // Event listener for reset button
    resetButton.addEventListener('click', function () {
        imgManipulated.querySelector('img').style.filter = '';
        sliders.forEach((slider) => (slider.value = slider.defaultValue));
    });
});
