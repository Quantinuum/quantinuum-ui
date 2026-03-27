'use client'

import { ChevronDownIcon } from 'lucide-react'
import { DateTime } from 'luxon'
import { Button, Calendar, Input, Popover, PopoverContent, PopoverTrigger } from 'src'

export const DateTimePicker = (props: { id: string; date: DateTime; setDate: (date: DateTime) => void }) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <label className="sr-only" htmlFor={props.id + '-date'}>
          {props.id + '-date'}
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id={props.id + '-date'}
              name={props.id + '-date'}
              className="min-w-48 justify-between font-normal"
            >
              {props.date ? props.date.toLocaleString() : 'Select a date'}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              className="min-h-[21rem]"
              selected={props.date?.toJSDate()}
              defaultMonth={props.date.toJSDate()}
              captionLayout="dropdown"
              onSelect={(date) => {
                if (date === undefined) return
                const calendar_date = DateTime.fromJSDate(date)

                props.setDate(
                  props.date.set({
                    year: calendar_date.year,
                    month: calendar_date.month,
                    day: calendar_date.day,
                  })
                )
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <label className="sr-only" htmlFor={props.id + '-time'}>
          {props.id + '-time'}
        </label>
        <Input
          type="time"
          id={props.id + '-time'}
          name={props.id + '-time'}
          step="600"
          value={props.date ? props.date.toFormat('HH:mm') : ''}
          onChange={(e) => {
            const [hour, minute] = e.target.value.split(':')
            props.setDate(
              props.date.set({
                hour: Number(hour),
                minute: Number(minute),
                second: 0,
                millisecond: 0,
              })
            )
          }}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  )
}
