import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  calendarDays: (number | null)[] = [];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDays = [];
    
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    // Fill empty slots for first week
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.calendarDays.push(null);
    }

    // Fill actual days
    for (let day = 1; day <= totalDays; day++) {
      this.calendarDays.push(day);
    }
  }

  prevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }
}
