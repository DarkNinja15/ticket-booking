import { create } from 'zustand'
import Train from '../assets/models/train'
import seat from '../assets/models/seat'

type Store = {
    train: Train
    coach: seat[][]
    bookSeats: (seats: number) => void
}

const useStore = create<Store>((set) => {
    const trainInstance = new Train()
    return {
        train: trainInstance,
        coach: trainInstance.coach,
        bookSeats: (seats: number) => {
            set((state) => {
                trainInstance.bookSeats(seats)
                return { coach: state.train.coach }
            })
        }
    }
})

export default useStore