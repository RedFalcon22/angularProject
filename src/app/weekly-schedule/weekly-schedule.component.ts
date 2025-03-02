import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-schedule',
  standalone: true, // Add this if using standalone components
  imports: [CommonModule], // Ensure CommonModule is imported
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
    { subject: 'Machine Learning', color: '#4CAF50', day: 'Monday', startTime: '08:30', room: 'Room 101' },
    { subject: 'Cybersecurite', color: '#E91E63', day: 'Monday', startTime: '14:45', room: 'Room 505' },
    { subject: 'Intro Ai', color: '#2196F3', day: 'Tuesday', startTime: '10:15', room: 'Room 202' },
    { subject: 'Sys. Exploi.', color: '#FF9800', day: 'Wednesday', startTime: '13:00', room: 'Room 303' },
    { subject: 'Sys. Exploi.', color: '#9C27B0', day: 'Thursday', startTime: '14:45', room: 'Room 404' },
    { subject: 'Machine Learning', color: '#E91E63', day: 'Friday', startTime: '08:30', room: 'Room 505' },
  ];

  getCoursesForTimeSlot(day: string, slot: { start: string, end: string }) {
    return this.courses.filter(course => course.day === day && course.startTime === slot.start);
  }
}
