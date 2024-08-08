create table AirTickets
(
	ticket_ID int primary key identity(1,1),
	trip varchar(50),
	departure varchar(50),
	arrival varchar(50),
	Seats int,
	SeatsTypes varchar(50),
	UserID int
	constraint fk_AirT_UID foreign key (UserID) references Users(UserID)
	on update cascade on delete cascade


);
drop table AirTickets
create procedure BookAirTicket
@trip varchar(50),
@dept varchar(50),
@arr varchar(50),
@seats int,
@seatType varchar(50),
@Uid int
as begin 
	insert into AirTickets (trip,departure,arrival,Seats,SeatsTypes,UserId)
	values
	(@trip,@dept,@arr,@seats,@seatType,@Uid);
end

drop procedure BookAirTicket
select * from AirTickets