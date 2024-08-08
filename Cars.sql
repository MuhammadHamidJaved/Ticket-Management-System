CREATE TABLE Cars_Table (
    Cars_id INT PRIMARY KEY identity(1,1),
    title VARCHAR(100) NOT NULL,
	link varchar(1000)
);


insert into Cars_Table (title,link)
values
('Buggati','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNODHJ5IglPQksnzRL-JqVFa5von0HrOqqMn_INRavg&s')


create table CarsTickets
(
	ticket_ID int primary key identity(1,1),
	Car varchar(50),
	City varchar(50),
	DropDate date,
	pickDate date,
	price int,
	UserID int
	constraint fk_CarT_UID foreign key (UserID) references Users(UserID)
	on update cascade on delete cascade


);
drop table CarsTickets

create procedure BookCarsTicket
@car varchar(50),
@city varchar(50),
@drop date,
@pick date,
@price int,
@Uid int
as begin 
	insert into CarsTickets (car,DropDate,pickDate,City,price,UserId)
	values
	(@car,@drop,@pick,@city,@price,@Uid);
end

--drop table CarsTickets
select * from CarsTickets