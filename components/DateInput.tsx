import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
 



const DateInput = props => {
  const {date, setDate, minDate, maxDate, placeHolder} = props
    return (
      <DatePicker
        style={styles.date_input}
        date={date}
        mode="date"
        placeholder={placeHolder}
        format="MM/DD/YYYY"
        minDate={minDate}
        maxDate={maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(input: string) => setDate(input)}
      />
    )
  }

export default DateInput

const styles= StyleSheet.create({
  date_input: {
    backgroundColor: "white",
    width: "80%"
}
})