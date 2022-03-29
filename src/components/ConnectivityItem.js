const ConnectivityItem1 = ({
  title,
  image,
  line1,
  line2,
  line3,
  line4,
  line5,
}) => {
  return (
    <div class="m-8 mb-5 text-center md:text-right">
      <div class="mb-5 flex items-center justify-center md:justify-end">
        <h2 class="mr-5 text-xl font-medium">{title}</h2>
        <img src={image} alt="icon" class="h-12" />
      </div>
      <p class="mb-1">{line1}</p>
      <p class="mb-1">{line2}</p>
      <p class="mb-1">{line3}</p>
      <p class="mb-1">{line4}</p>
      <p class="mb-1">{line5}</p>
    </div>
  )
}

const ConnectivityItem2 = ({
  title,
  image,
  line1,
  line2,
  line3,
  line4,
  line5,
}) => {
  return (
    <div class="m-8 mb-5 text-center md:text-left">
      <div class="mb-5 flex items-center justify-center md:justify-start">
        <img src={image} alt="icon" class="h-12" />
        <h2 class="ml-5 text-xl font-medium">{title}</h2>
      </div>
      <p class="mb-1">{line1}</p>
      <p class="mb-1">{line2}</p>
      <p class="mb-1">{line3}</p>
      <p class="mb-1">{line4}</p>
      <p class="mb-1">{line5}</p>
    </div>
  )
}

export { ConnectivityItem1, ConnectivityItem2 }
