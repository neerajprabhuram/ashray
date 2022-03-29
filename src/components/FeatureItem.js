const FeatureItem = ({ icon, text }) => {
  return (
    <div class="m-3 inline-block w-96 rounded-md bg-blue-50 p-6 shadow-md sm:w-72">
      {icon}
      <p class="mt-4 text-lg">{text}</p>
    </div>
  )
}

export default FeatureItem
