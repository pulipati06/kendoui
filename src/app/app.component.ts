import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';

@Component({
  selector: 'my-app',
  template: `
        <kendo-scheduler [kendoSchedulerBinding]="events" [selectedDate]="selectedDate" scrollTime="08:00" style="height: 600px;">
            <kendo-scheduler-day-view> </kendo-scheduler-day-view>

            <kendo-scheduler-week-view> </kendo-scheduler-week-view>

            <kendo-scheduler-month-view> </kendo-scheduler-month-view>

            <kendo-scheduler-timeline-view> </kendo-scheduler-timeline-view>

            <kendo-scheduler-agenda-view> </kendo-scheduler-agenda-view>
        </kendo-scheduler>
    `,
})
export class AppComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
}
