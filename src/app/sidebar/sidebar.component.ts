import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

interface SidebarLink {
  label: string;
  icon: string;
  route: string;
}

interface UserProfile {
  name: string;
  title: string;
  profileImage: string;
}

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
  userProfile: UserProfile = {
    name: "Asma xy",
    title: "Dr en Cybersécurité",
    profileImage: "purple-universe-wallpaper.jpg", // Change this to your image path
  };

  links: SidebarLink[] = [
    { label: "Dashboard", icon: "dashboard.png", route: "/dashboard" },
    { label: "Lessons", icon: "lesson.png", route: "/lessons" },
    { label: "Quiz", icon: "quiz.png", route: "/quiz" },
    { label: "Classe", icon: "student.png", route: "/classe" },
    { label: "Présence", icon: "attendeance.png", route: "/presence" },
    { label: "Taches", icon: "homework.png", route: "/tasks" },
    { label: "Moyennes", icon: "grades.png", route: "/grades" },
    { label: "Alumni", icon: "alumni.png", route: "/alumni" }
  ];
}
