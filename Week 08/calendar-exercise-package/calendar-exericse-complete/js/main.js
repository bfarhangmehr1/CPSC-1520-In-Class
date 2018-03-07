var days = [
	'Sun',
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat'
];

var months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

/*
 * Produces a calendar in a table for the month provided.
 * year  - the year for which the calendar is desired
 * month - the month for which the calendar is desired; should be a value between 0-12 
 *         where 0 = January and 11 = December
 */
function getCalendar(year, month) {
	// variable to hold the completed calendar table
	var cal;
	// create a date for the first and last days of the month
	var firstDay = new Date(year, month, 1);
	var lastDay = new Date(year, month + 1, 0); // see MDN regarding day=0 argument
	// counter for the day loop
	var day;
	// counter for blank days (if any)
	var blank = 0;

	// begin building the calendar
	cal = '<h2>' + months[month] + ' ' + year + '</h2><table class="calendar"><tr>';

	// include day names
	for (day = 0; day < days.length; day += 1) {
		cal += '<th>' + days[day] + '</th>';
	}

	// close the day names row and open the first dates row
	cal += '</tr><tr>';

	// determine the first day of the week to leave empty days
	for (day = 0; day < lastDay.getDate(); day += 1 ) {
		
		// the first days may be blank, depending on what the first day of the month is
		if (day < firstDay.getDay() && !blank) {
			for (blank = 0; blank < firstDay.getDay(); blank += 1) {
				cal += '<td></td>';
			}
		}

		cal += '<td>' + (day + 1) + '</td>';

		// if it's the end of the week (7 days), then close the current row
		if ((day + blank + 1) % 7=== 0) {
			cal += '</tr>';
			// begin a new row if not the end of the month
			if (day < lastDay.getDate() + 1) {
				cal += '<tr>';
			}
		}
	}

	// return the completed calendar
	return cal += '</table>'
}

// display the calendar in the desired element
document.querySelector('.display').innerHTML = getCalendar((new Date()).getFullYear(), (new Date()).getMonth());