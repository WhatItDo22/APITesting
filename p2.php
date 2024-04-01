<!DOCTYPE html>
<html>
<head>
    <title>Office Hours</title>
    <style>
        table {
            border-collapse: collapse;
            width: 300px;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
        }
    </style>
</head>
<body>
    <h1>Office Hours</h1>
    <table>
        <tr>
            <th>Day</th>
            <th>Hours</th>
        </tr>
        <?php
        $officeHours = [
            'Monday' => '9am - 4pm',
            'Tuesday' => '9am - 4pm',
            'Wednesday' => '9am - 4pm',
            'Thursday' => '9am - 4pm',
            'Friday' => '9am - 4pm',
            'Saturday' => 'Closed',
            'Sunday' => 'Closed'
        ];

        foreach ($officeHours as $day => $hours) {
            echo "<tr><td>$day</td><td>$hours</td></tr>";
        }
        ?>
    </table>
</body>
</html>