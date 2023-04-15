import Event from '../models/event.js'

export const createEvent = async(req, res) => {
  const newEvent = new Event(req.body)
  try {
    const event = await newEvent.save()
    return res.status(201).json(event)
  } catch (error) {
    return res.status(422).json({ error: 'Unable to add new Event, try again...' })
  }
}