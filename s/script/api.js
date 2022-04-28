let labels = [];


let data = {
    labels: labels,
    datasets: []
  };


let config = {
    type: 'line',
    data: data,
    options: {}
  };

let myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  function initSecidSelect(){
    let secid = document.getElementById('secid_select');
    $.ajax({ 
     url: 'https://sedelkin.ru/api/security_list',
     method: 'get',
     dataType: 'json', 
     data: {},
     success: function(data){ 
         let optionArray = [];
         while (secid.firstChild){
             secid.removeChild(secid.firstChild); 
         }
         let arr = data.data; 
         arr.forEach(function(item){
             optionArray.push(createOptionElen(item.title, item.secid));

         });
         optionArray.forEach(function (item){
             secid.append(item);
         });
     }   
    });
}

function initIntervalSelect(){
    let interval = document.getElementById('interval_select');
    $.ajax({ 
     url: 'https://sedelkin.ru/api/interval', 
     method: 'get',
     dataType: 'json', 
     data: {},
     success: function(data){ 
         let optionArray = [];
         while (interval.firstChild){
             interval.removeChild(interval.firstChild); 
         }
         let arr = data.data;
         arr.forEach(function(item){
             optionArray.push(createOptionElen(item.title, item.value));

         });
         optionArray.forEach(function (item){
             interval.append(item);
         });
     }   
    });
}

function createOptionElen(title, value){
    let option = new Option(title,value);
    return option;
}

function updateChart(chartName, dataObject){
    let dataCharts = [];
    dataObject.forEach(function (item){
      labels.push(item.datetime);
      console.info("Добавил в labels" +item.datetime);
      dataCharts.push(parseFloat(item.close));
  
    });
    data.labels = labels;
    data.datasets.push({
      label: chartName,
      data: dataCharts,
      fill: true,
      borderColor: 'green',
      tension: 0.1
    });

    myChart.update();
  }


function clearChartData(){
      data.datasets = [];
      labels = [];
      data.labels = [];
  }

function getData(event){
    event.preventDefault();
    let secid_index = document.getElementById('secid_select').options.selectedIndex;
    let interval_index = document.getElementById('interval_select').options.selectedIndex;
    let secidValue = document.getElementById('secid_select').options[secid_index].value;
    let intervalValue = document.getElementById('interval_select').options[interval_index].value;
    let limits = document.getElementById('limit_value');
    let startDates = document.getElementById('start_date');
    let endDates = document.getElementById('end_date');
    
    if(startDates.value > endDates.value)
    {
        alert("Ошибка!");
    }

    $.ajax({
        url: 'https://sedelkin.ru/api/history/get_data',
        method: 'post',
        dataType: 'json',
        data:{
            app_key: 'lpDRhW4f%5Bj|i8mB~BjlCD#Ve6wAi',
            interval: intervalValue,
            limits: limits.value,
            secid: secidValue,
            start: startDates.value,
            finish: endDates.value,
        },
        success: function(data){
            if(data.status == "OK"){
                clearChartData();
                updateChart(data.secid,data.data);
                console.info("ЕССС");
            }
            else if(data.status == "Error"){
                showError(data.data);
            }
        }
    });
}  

function showError(errorObject){
    let message = "";
    for (propertyName in errorobject){
        if(errorObject[propertyName].status == "Error")
        message+=errorObject[propertyName].message+"\n";
    }
    alert(message);
}



initSecidSelect();
initIntervalSelect();