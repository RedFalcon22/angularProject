import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfoCardsComponent } from "../info-cards/info-cards.component";
import { WeeklyScheduleComponent } from "../weekly-schedule/weekly-schedule.component";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { MessagingComponent } from "../messaging/messaging.component";


@Component({
  selector: "app-teacher-dashboard",
  standalone: true,
  imports: [CommonModule, InfoCardsComponent, WeeklyScheduleComponent, RouterModule, CalendarComponent, SidebarComponent, MessagingComponent],
  templateUrl: "./teacher-dashboard.component.html",
  styleUrls: ["./teacher-dashboard.component.css"],
})
export class TeacherDashboardComponent {}
