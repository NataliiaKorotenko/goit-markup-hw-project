var isUnknowDate = Number(0);
                    
window.addEventListener('load', function(event) {
    if(isUnknowDate) {
        var datePicker = $('datePicker');
        datePicker && datePicker.fireEvent('click');
    }
});
