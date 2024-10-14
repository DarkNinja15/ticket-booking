import { create } from 'zustand'
import Train from '../assets/models/train'
import seat from '../assets/models/seat'

// Store type
type Store = {
    train: Train
    coach: seat[][]
    bookSeats: (seats: number) => void
}


// Create a store
const useStore = create<Store>((set) => {
    const trainInstance = new Train() // Create a new Train instance
    return {
        train: trainInstance, // Store the Train instance
        coach: trainInstance.coach, // Store the coach layout
        bookSeats: (seats: number) => {
            set((state) => {
                trainInstance.bookSeats(seats)
                return { coach: state.train.coach }
            })
        } // Book seats function
    }
})

export default useStore