const FormComponent = () => {
  return (
    <div class="mx-auto w-[80%] py-8 sm:w-[70%] md:w-[45%] md:pl-4 md:pr-16 xl:pl-12 xl:pr-32">
      <h1 class="mb-8 text-center font-PTSerif text-3xl">Contact Us</h1>
      <form class="space-y-4 " action="#" method="POST">
        <div>
          <label for="name" class="block text-sm">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-sm">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
            required
          />
        </div>
        <div>
          <label for="phone" class="block text-sm">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
            required
          />
        </div>
        <div>
          <label for="message" class="block text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
            required
          />
        </div>
        <button class="cursor-pointer rounded bg-yellow-300 px-6 py-2 text-black">
          Send
        </button>
      </form>
    </div>
  )
}

export default FormComponent
