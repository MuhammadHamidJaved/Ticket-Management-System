-- Create a new database
CREATE DATABASE UserAuthenticationDB;
GO

-- Use the newly created database
USE UserAuthenticationDB;
GO

-- Create a table to store user information
CREATE TABLE Users (
    UserID INT Unique  IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) PRIMARY KEY NOT NULL,
    PasswordHash NVARCHAR(100) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
	IsAdmin int
);
GO

alter table Users 
add IsAdmin int default 0

drop table Users

-- Create a stored procedure to insert a new user
CREATE PROCEDURE InsertUser
    @Username NVARCHAR(50),
    @Email NVARCHAR(100),
    @PasswordHash NVARCHAR(100)
AS
BEGIN
    INSERT INTO Users (Username, Email, PasswordHash)
    VALUES (@Username, @Email, @PasswordHash);
END;
GO

CREATE PROCEDURE InsertAdmin
    @Username NVARCHAR(50),
    @Email NVARCHAR(100),
    @PasswordHash NVARCHAR(100),
	@isAdmin int
AS
BEGIN
    INSERT INTO Users (Username, Email, PasswordHash,IsAdmin)
    VALUES (@Username, @Email, @PasswordHash,@isAdmin);
END;
GO

exec InsertAdmin @Username='Sarosh Humayun', @Email='sarosh.humayun@lhr.nu.edu.pk',@PasswordHash='123456',@isAdmin=1;
-- Create a stored procedure to retrieve a user by username and password hash
alter PROCEDURE CheckUser
    @Email NVARCHAR(50),
    @PasswordHash NVARCHAR(100)
AS
BEGIN
    SELECT * FROM Users
    WHERE Email = @Email AND PasswordHash = @PasswordHash;
END;
GO

create procedure RemoveUser
@Email varchar(50)
as begin
	delete from Users 
	where Email=@Email;
end

delete from Users
where UserID between 1 and 20;

select * from Users