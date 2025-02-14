$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/historicalevents?day=' + 26 + '&month=' + 2,
    headers: { 'X-Api-Key': 'UMGS/64ogYd1XoBJdeffeA==icly8l89N5eOy1rW'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

const subBtn = document.getElementById("submit");
subBtn.addEventListener("click", function(){
var date = document.getElementById("date").value;
console.log(date);
let year = date.slice(0,4);
let month = date.slice(5,7)
let day = date.slice(8,10);

})
