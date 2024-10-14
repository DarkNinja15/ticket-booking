import seat from "./seat";
class Train {
  coach: seat[][] = [];
  totalSeats = 80;
  rows = 12;
  seatsPerRow = 7;

  constructor() {
    // Initialize coach seat layout
    this.initializeSeats();
  }

  // Initialize the seats in the coach
  initializeSeats() {
    let seatNumber = 1;
    for (let i = 0; i < this.rows - 1; i++) {
      let row: seat[] = [];
      for (let j = 0; j < this.seatsPerRow; j++) {
        row.push({ seatNumber: seatNumber++, available: true });
      }
      this.coach.push(row);
    }
    // Last row has only 3 seats
    let lastRow: any[] = [];
    for (let i = 0; i < 3; i++) {
      lastRow.push({ seatNumber: seatNumber++, available: true });
    }
    this.coach.push(lastRow);
  }

  // Booking function
  bookSeats(numSeats: number) {
    if (numSeats < 1 || numSeats > 7) {
      alert('You can only book between 1 and 7 seats.');
      return;
    }

    let seatsBooked = this.allocateSeats(numSeats);
    if (seatsBooked.length > 0) {
      alert(`Seats booked: ${seatsBooked.map(seat => seat.seatNumber).join(', ')}`);
    } else {
      alert('Not enough contiguous seats available.');
    }
  }

  // Allocate seats in one row or nearby rows
  allocateSeats(numSeats: number): any[] {
    let seatsBooked: any[] = [];

    // First, try to book all seats in one row
    for (let i = 0; i < this.coach.length; i++) {
      let availableSeatsInRow = this.coach[i].filter(seat => seat.available);
      if (availableSeatsInRow.length >= numSeats) {
        for (let j = 0; j < numSeats; j++) {
          availableSeatsInRow[j].available = false;
          seatsBooked.push(availableSeatsInRow[j]);
        }
        return seatsBooked;
      }
    }

    // If not possible, book nearby seats from multiple rows
    let remainingSeats = numSeats;
    for (let i = 0; i < this.coach.length; i++) {
      let availableSeatsInRow = this.coach[i].filter(seat => seat.available);
      for (let seat of availableSeatsInRow) {
        if (remainingSeats === 0) break;
        seat.available = false;
        seatsBooked.push(seat);
        remainingSeats--;
      }
      if (remainingSeats === 0) break;
    }

    return remainingSeats === 0 ? seatsBooked : [];
  }
}

export default Train;