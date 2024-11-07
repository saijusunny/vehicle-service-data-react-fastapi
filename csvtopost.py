import psycopg2

# Define database connection
conn = psycopg2.connect(
    dbname="your_database",
    user="username",
    password="password",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

# Open the CSV file and use the COPY command
with open('car_prices.csv', 'r') as f:
    next(f)  # Skip the header row
    cursor.copy_expert("COPY your_table_name FROM STDIN WITH CSV", f)

# Commit the transaction and close the connection
conn.commit()
cursor.close()
conn.close()
