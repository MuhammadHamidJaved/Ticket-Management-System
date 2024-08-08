go
use UserAuthenticationDB
go
go
create table BusTickets(
	TicketId int primary key identity(1,1),
	BuyerName varchar(50),
	BusName varchar(50),
	Contact varchar(50),
	Email varchar(100),
	TicketType varchar(40),
	SrcFrom varchar(40),
	DestTo varchar(40),
	TravelDate Date,
	NoOfPassengers int,
);

select * from Users
create table UsersTicket(
	userID int Not Null,
	TicketId int Not Null,
	primary key(userID,TicketId),
	Constraint FK_UID foreign key (userID)
	references Users(UserID)
	on update Cascade on delete Cascade,
	Constraint FK_BT_ID foreign key (TicketId)
	references BusTickets(TicketId)
	on update Cascade on delete Cascade

);

create procedure BookBusTicket

@BuyerName varchar(50),
@Contact varchar(50), 
@Email varchar(100), 
@BusName varchar(50),
@TicketType varchar(40), 
@SrcFrom varchar(40), 
@DestTo varchar(40), 
@TravelDate Date, 
@TotalSeats int
as
begin

	insert into BusTickets (BuyerName,BusName,Contact,Email,TicketType,SrcFrom,DestTo,TravelDate,NoOfPassengers)
	values
	(@BuyerName,@BusName,@Contact,@Email,@TicketType,@SrcFrom,@DestTo,@TravelDate,@TotalSeats)
	
end;

create procedure InsertTicketID
@Tid int,
@Uid int
as
begin
	insert into UsersTicket
	values
	(@Uid,@Tid);
end;

--Exec InsertTicketID @Tid=1,@Uid=1;

drop procedure InsertTicketID
drop table UsersTicket
drop table BusTickets
drop procedure BookBusTicket

select * from BusTickets
select * from UsersTicket
