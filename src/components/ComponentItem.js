const ComponentItem = ({ img, title }) => {
  return (
    <div
      class="m-3 flex w-96 items-center rounded-md 
    bg-blue-50 p-6 shadow-md"
    >
      <img src={img} alt="icon" class="h-12" />
      <h2 class="mx-8 text-lg">{title}</h2>
    </div>
  )
}

export default ComponentItem
