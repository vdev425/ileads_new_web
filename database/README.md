# Database Setup Instructions

## Prerequisites
- MySQL Server installed on your system
- MySQL credentials (username and password)

## Setup Steps

### 1. Install MySQL Server (if not already installed)
Download and install MySQL from: https://dev.mysql.com/downloads/mysql/

### 2. Create Database and Table
Run the following command in your terminal to execute the schema:

```bash
mysql -u root -p < database/schema.sql
```

Or, you can use a MySQL client like MySQL Workbench or phpMyAdmin and run the `schema.sql` file.

### 3. Configure Environment Variables
Update the `.env.local` file in the root directory with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=ileads
```

### 4. Test Database Connection
After starting your Next.js application, the API will automatically connect to the database.

## Database Schema

### Table: `job_application`

Stores job application form submissions.

- **id**: Auto-increment primary key
- **name**: Applicant's name (required)
- **father_name**: Father's or Mother's name
- **dob**: Date of birth
- **gender**: Gender (Female/Male/Other)
- **contact_number**: Contact number (required)
- **email**: Email address (required)
- **address**: Residential address
- **city**: City of residence
- **qualification**: Educational qualification
- **experience**: Work experience (Fresher/Experienced)
- **created_at**: Timestamp when record was created
- **updated_at**: Timestamp when record was last updated

### Table: `contact_us`

Stores contact form submissions.

- **id**: Auto-increment primary key
- **name**: Contact person's name (required)
- **organization**: Organization name (optional)
- **email**: Email address (required)
- **phone**: Phone number (required)
- **message**: Contact message (required)
- **created_at**: Timestamp when record was created
- **updated_at**: Timestamp when record was last updated

### Table: `service_inquiry`

Stores service inquiry form submissions from the our-services page.

- **id**: Auto-increment primary key
- **name**: Full name (required)
- **organization**: Organization name (required)
- **email**: Email address (required)
- **query**: Service inquiry details (required)
- **created_at**: Timestamp when record was created
- **updated_at**: Timestamp when record was last updated

### Table: `chat_messages`

Stores chat widget messages from the floating chat form.

- **id**: Auto-increment primary key
- **name**: User's name (required)
- **email**: Email address (required)
- **message**: Chat message (required)
- **created_at**: Timestamp when record was created
- **updated_at**: Timestamp when record was last updated

## Viewing Data

You can view submitted data using any MySQL client or run:

```sql
-- View job applications
SELECT * FROM job_application ORDER BY created_at DESC;

-- View contact messages
SELECT * FROM contact_us ORDER BY created_at DESC;

-- View service inquiries
SELECT * FROM service_inquiry ORDER BY created_at DESC;

-- View chat messages
SELECT * FROM chat_messages ORDER BY created_at DESC;
```

## Troubleshooting

### Connection Issues
- Ensure MySQL server is running
- Verify database credentials in `.env.local`
- Check if port 3306 is not blocked by firewall

### Permission Issues
- Grant necessary privileges to your MySQL user:
```sql
GRANT ALL PRIVILEGES ON ileads.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;
```
