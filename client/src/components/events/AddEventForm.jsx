import { useState } from "react"

const AddEventForm = () => {
  const [eventInput, setEventInput] = useState({
    eventName: "",
    description: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    eventURL: "",
    price: 0
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setEventInput({...eventInput, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="max-w-7xl py-10 md:py-12 lg:py-14 md:mx-auto">
      <div className="">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-medium tracking-wider pt-6 pb-12 text-zinc-700">Add a new event!</h1>
      </div>
      <form className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto flex flex-col gap-6 md:gap-8 bg-white text-gray-700 py-6 md:py-14 px-8 md:px-12 rounded-xl text-lg shadow-lg">
        <div className="flex flex-col gap-2">
          <label htmlFor="eventName" className="font-medium text-gray-500">Event name</label>
          <input type="text" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="eventName" name="eventName" placeholder="A Queer Event" onChange={handleInput} required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-medium text-gray-500">Brief Description</label>
          <textarea type="text" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="description" name="description" placeholder="A brief but queer description" onChange={handleInput} required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="eventDate" className="font-medium text-gray-500">Date of Event</label>
          <input type="date" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="eventDate" name="eventDate" onChange={handleInput} required />
        </div>
        <div className="flex flwx row items-center justify-between gap-10">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="startTime" className="font-medium text-gray-500">Start Time</label>
            <input type="time" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="startTime" name="startTime" onChange={handleInput} required />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="endTime" className="font-medium text-gray-500">End Time</label>
            <input type="time" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="endTime" name="endTime" onChange={handleInput} required />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-medium text-gray-500">Address</label>
          <input type="text" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="addressLine1" name="addressLine1" placeholder="Line 1 of address" onChange={handleInput} required />
          <input type="text" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="addressLine2" name="addressLine2" placeholder="Line 2 of address" onChange={handleInput} required />
          <div className="flex flex-row gap-6 md:gap-10">
            <input type="text" className="w-1/2 border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="city" name="city" placeholder="town/City" onChange={handleInput} required />
            <input type="text" className="w-1/2 border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="postcode" name="postcode" placeholder="Postcode" onChange={handleInput} required />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="eventURL" className="font-medium text-gray-500">Event Details URL</label>
          <input type="url" className="w-full border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="eventURL" name="eventURL" placeholder="Link to Event Details or registration" onChange={handleInput} required />
        </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="font-medium text-gray-500">Price</label>
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <p className="text-lg px-1 font-medium text-gray-500">€</p>
                  <input type="number" min={0} className="w-4/5 border rounded-lg py-1 px-2 md:py-2 md:px-4 shadow-inner bg-gray-200 focus:bg-white outline-none text-sm" id="price" name="price" placeholder="10.00€" onChange={handleInput} required />
                  <p className="w-full text-gray-500 text-sm pl-2">(Enter 0 if event is free.)</p>
                </div>
              </div>
        </div>
        <button onClick={handleSubmit} className="bg-rose-500 text-white tracking-wider w-fit mx-auto rounded-lg py-2 px-4 my-4 md:mt-6 text-sm font-semibold hover:scale-105 transition duration-200">Add Event</button>
      </form>
    </div>
  )
}
export default AddEventForm