FusionCharts.ready(function(){

      /*生成环节比列*/
      var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "huanjie",
        "width": "100%",
        "height": "220",
        "dataFormat": "json",
        "dataSource": {
          "chart": {
              "caption": "",
              "subCaption": "",
              "xAxisName": "",
              "yAxisName": "",
              "paletteColors": "#5BC0EB, #FFD728, #9BC53D, #E55934, #FA7921",
              "theme": "carbon"
           },
          "data": [
              {
                 "label": "原型",
                 "value": "6800"
              },
              {
                 "label": "UI/UX",
                 "value": "5400"
              },
              {
                 "label": "前端",
                 "value": "9800"
              },
              {
                 "label": "后台",
                 "value": "12000"
              },
              {
                 "label": "测试",
                 "value": "6000"
              }
           ]
        }
    });



    /*功能模块比列*/
      var moduleChart = new FusionCharts({
        "type": "doughnut2d",
        "renderAt": "module",
        "width": "100%",
        "height": "250",
        "dataFormat": "json",
        "dataSource": {
          "chart": {
              "caption": "",
              "subCaption": "",
              "numberPrefix": "¥",
              "showLabels": "0",
              "showPercentValues": "1",
              "decimals": "0",
              "showBorder": "0",
              "use3DLighting": "0",
              "showLegend": "1",
              "paletteColors": "#5BC0EB, #FFD728, #9BC53D, #FA7921",
              "theme": "carbon"
           },
          "data": [
              {
                 "label": "展示端",
                 "value": "6800"
              },
              {
                 "label": "用户端",
                 "value": "5400"
              },
              {
                 "label": "管理端",
                 "value": "9800"
              },
              {
                 "label": "其它",
                 "value": "2000"
              }
           ]
        }
    });

    moduleChart.render();
    revenueChart.render();
})