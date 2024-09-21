import React, { useState } from 'react';
import './BookingSchedulerComponent.css';

// Define available slots for each day of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hours = ['10:00', '12:00', '14:00', '16:00', '18:00'];

const BookingSchedulerComponent = () => {
  const [schedule, setSchedule] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = hours.map((hour) => ({ time: hour, booked: false }));
      return acc;
    }, {})
  );

  const handleBooking = (day, time) => {
    // Update the booking state for the selected day and time
    const updatedSchedule = { ...schedule };
    updatedSchedule[day] = updatedSchedule[day].map((slot) =>
      slot.time === time ? { ...slot, booked: !slot.booked } : slot
    );
    setSchedule(updatedSchedule);
  };

  return (
    <section className="booking-scheduler" id="book"> {/* Add id here */}
      <h2>Schedule Your Appointment</h2>
      <div className="scheduler-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <td>{hour}</td>
                {daysOfWeek.map((day) => (
                  <td
                    key={day + hour}
                    className={schedule[day].find((slot) => slot.time === hour).booked ? 'booked' : 'available'}
                    onClick={() => handleBooking(day, hour)}
                  >
                    {schedule[day].find((slot) => slot.time === hour).booked ? 'Booked' : 'Available'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookingSchedulerComponent;