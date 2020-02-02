/* 
this javascript is only to change the "actpage" attribut on the .cdp div
*/
$(document).ready(function(){ 
  
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
  });
  
  $(document).on("click", "#btnMakePayment", function () {
    var option = $("#makePaymentMethod option:selected").text();
    if(option == "Card"){
      window.location.href = "debitcardpayment.html";
    }else if(option == "Bank"){
      window.location.href = "payviabank.html";
    }else if(option == "Agent"){
      window.location.href = "payviaagent.html";
    }
  });

  $(document).on("click", "#btnAgentMakePayment", function () {
    var option = $("#agentPaymentMethod option:selected").text();
    if(option == "Card"){
      window.location.href = "agentdebitcardpay.html";
    }else if(option == "Bank"){
      window.location.href = "agentbankpay.html";
    }else if(option == "Agent"){
      window.location.href = "payviaagent.html";
    }
  });
    
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
          datasets: [{ 
              data: [86,114,106,106,107,111,133,221,783,2478],
              label: "Africa",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: [282,350,411,502,635,809,947,1402,3700,5267],
              label: "Asia",
              borderColor: "#8e5ea2",
              fill: false
            }, { 
              data: [168,170,178,190,203,276,408,547,675,734],
              label: "Europe",
              borderColor: "#3cba9f",
              fill: false
            }, { 
              data: [40,20,10,16,24,38,74,167,508,784],
              label: "Latin America",
              borderColor: "#e8c3b9",
              fill: false
            }, { 
              data: [6,3,2,2,7,26,82,172,312,433],
              label: "North America",
              borderColor: "#c45850",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      });
      

      
});
window.onload = function(){
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function(){
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      }else{
        paginationPage = parseInt(go, 10);
      }
      $('.cdp').attr('actpage', paginationPage);
    });

    $("#inpt_search").on('focus', function () {
      $(this).parent('label').addClass('active');
    });
    
    $("#inpt_search").on('blur', function () {
      if($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
    });

    
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


  };

  function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var viewcount = document.getElementsByClassName("userviewicon").length;
    for (var i = 1; i <= viewcount; i++) {
      var view = document.getElementById("userviewicon" + i);
      var edit = document.getElementById("userediticon" + i);
      var act = document.getElementById("adminActionDiv" + i)
      if (checkBox.checked == true){
        view.style.display = "none";
        edit.style.display = "block";
        act.style.display = "none";
      } else {
        view.style.display = "block";
        edit.style.display = "none";
        act.style.display = "none";
      }
    }
  }

  function changeMDALink(){
    var checkBox = document.getElementById("myCheck");
    var view = document.getElementById("viewMDA");
    var edit = document.getElementById("editMDA");
    if (checkBox.checked == true){
      view.style.display = "none";
      edit.style.display = "block";
    } else {
      view.style.display = "block";
      edit.style.display = "none";
    }
  }

  function changePaymentItemLink(){
    var checkBox = document.getElementById("myCheck");
    var view = document.getElementById("viewMDA");
    var edit = document.getElementById("editMDA");
    if (checkBox.checked == true){
      view.style.display = "none";
      edit.style.display = "block";
    } else {
      view.style.display = "block";
      edit.style.display = "none";
    }
  }

  

  function changeText() {
    var y = document.getElementById("input-file").value;
    document.getElementById("selectedFileName").innerHTML = y;
  }

  function de(){
    document.getElementById('denialTable').style.display = 'block'; 
  }

  function showQuestions() {
    document.getElementById('questionTable').style.display = 'block';
  }