import { useState } from "react";

interface Event {
  title: string;
  date: Date;
  type: "upcoming" | "waiting" | "finished";
  status?: "passed" | "failed"; 
}

export default function useEvents() {
  const [events, setEvents] = useState<Record<string, Event[]>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const fetchEvents = async (type: string) => {
    setLoading((prev) => ({ ...prev, [type]: true }));
    return new Promise<Event[]>((resolve) => {
      setTimeout(() => {
        const data: Event[] = [
          { title: "Math Final", date: new Date(2025, 5, 23), type: "upcoming" }, // 23.6.2025
          { title: "Physics Midterm", date: new Date(2025, 5, 24), type: "waiting" }, // 24.6.2025
          { title: "Chemistry Quiz", date: new Date(2025, 5, 20), type: "finished", status: "passed" }, // 20.6.2025
          { title: "Biology Test", date: new Date(2025, 5, 26), type: "upcoming" }, // 26.6.2025
          { title: "History Exam", date: new Date(2025, 5, 27), type: "waiting" }, // 27.6.2025
          { title: "English Literature Quiz", date: new Date(2025, 5, 21), type: "finished", status: "failed" }, // 21.6.2025
          { title: "Computer Science Final", date: new Date(2025, 5, 29), type: "upcoming" }, // 29.6.2025
          { title: "Geography Test", date: new Date(2025, 5, 30), type: "waiting" }, // 30.6.2025
          { title: "French Oral Exam", date: new Date(2025, 5, 19), type: "finished", status: "passed" }, // 19.6.2025
          { title: "Economics Midterm", date: new Date(2025, 6, 2), type: "upcoming" }, // 2.7.2025
        ];
        const filtered = data
          .filter((event) => event.type === type)
          .sort((a, b) => Math.abs(a.date.getTime() - Date.now()) - Math.abs(b.date.getTime() - Date.now()));
        resolve(filtered);
      }, 1000); // Simulate 1 second delay
    }).finally(() => {
      setLoading((prev) => ({ ...prev, [type]: false }));
    });
  };

  const loadEvents = async (type: string) => {
    const fetchedEvents = await fetchEvents(type);
    setEvents((prev) => ({ ...prev, [type]: fetchedEvents }));
  };

  return { events, loading, loadEvents };
}

