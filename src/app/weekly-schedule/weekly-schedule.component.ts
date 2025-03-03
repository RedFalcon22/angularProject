import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.css']
})
export class WeeklyScheduleComponent {
  weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  timeSlots = [
    { start: '08:30', end: '10:00' },
    { start: '10:15', end: '11:45' },
    { start: '13:00', end: '14:30' },
    { start: '14:45', end: '16:15' }
  ];

  courses = [
    { subject: 'Applied Science', color: '#FF6B6B', day: 'Monday', startTime: '08:30' },
    { subject: 'Technology', color: '#4D96FF', day: 'Wednesday', startTime: '10:15' },
    { subject: 'UX Design', color: '#FFC107', day: 'Thursday', startTime: '13:00' },
    { subject: 'Artificial Intelligence', color: '#50C878', day: 'Wednesday', startTime: '14:45' },
    { subject: 'Business Management', color: '#FF7043', day: 'Thursday', startTime: '08:30' }
  ];

  getCoursesForTimeSlot(day: string, slot: { start: string, end: string }) {
    return this.courses.filter(course => course.day === day && course.startTime === slot.start);
  }
}
