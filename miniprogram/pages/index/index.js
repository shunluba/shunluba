Page({
  data: {
    markers: [{
      iconPath: '/resources/others.png',
      id: 0,
      latitude: 24.36845,
      longitude: 118.04613,
      width: 10,
      height: 10
    }],
    polyline: [{
      points: [{
        longitude: 118.04613,
        latitude: 24.36845
      }, {
          longitude: 118.04613,
          latitude: 24.36845
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})