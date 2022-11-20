let btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('hello')
  })
})



let btnGetAll = document.querySelector('.button-getAll')

btnGetAll.addEventListener('click', () => {
    
    fetch('http://trackingtravel.me:8080/api/test-routes/getAll', {
      method: 'GET',
      /* headers: { 'Content-Type': 'application/json' },
      credentials: "omit" */
    })

  .then(response => response.json())

  .then(data => {
    console.log(data)
    let result = document.querySelector('.result')
    result.innerHTML = ''

    data.forEach(item => {
        setResult(item, result)
    })

  })

})

  

let btnGet = document.querySelector('.button-get')

btnGet.addEventListener('click', () => {
    //console.log('hi')
    let input = document.querySelector('.input-get')
    let inputValue = +input.value
    console.log(inputValue + 1)

    fetch(`http://trackingtravel.me:8080/api/test-routes/${inputValue}`, {
      method: 'GET',
      /* headers: { 'Content-Type': 'application/json' },
      credentials: "omit" */
    })

    .then(response => response.json())

    .then(data => {
        //console.log(data)
        let result = document.querySelector('.result')
        result.innerHTML = ''
        setResult(data, result)
    })

    .catch((error) => {
        let result = document.querySelector('.result')
        result.innerHTML = ''
        result.innerHTML = '<p>Ошибка. По выбранному id маршрут не найден</p>'
        //console.log(error)
    })
})

function setResult(item, result) {
    let box = document.createElement('div')

      let id = document.createElement('p')
      id.textContent = 'id ' + item.id
      box.append(id)

      let country = document.createElement('p')
      country.textContent = 'country: ' + item.country.nameOfCountry
      box.append(country)

      let description = document.createElement('p')
      description.textContent = 'description: ' + item.description
      box.append(description)

      let distanceRoute = document.createElement('p')
      distanceRoute.textContent = 'distanceRoute: ' + item.distanceRoute
      box.append(distanceRoute)

      let durationRoute = document.createElement('p')
      durationRoute.textContent = 'durationRoute: ' + item.durationRoute
      box.append(durationRoute)

      let heightPeak = document.createElement('p')
      heightPeak.textContent = 'heightPeak: ' + item.heightPeak
      box.append(heightPeak)

      let linkToMap = document.createElement('p')
      linkToMap.textContent = 'linkToMap: ' + item.linkToMap
      box.append(linkToMap)

      let photo = document.createElement('p')
      photo.textContent = 'photo: ' 

      item.photo.forEach(foto => {
        photo.textContent += foto.name
        photo.textContent += ' , '
      })
      box.append(photo)

      let title = document.createElement('p')
      title.textContent = 'title: ' + item.title
      box.append(title)

      result.append(box)
      result.append(document.createElement('br'))
}