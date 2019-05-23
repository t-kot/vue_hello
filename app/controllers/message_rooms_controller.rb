class MessageRoomsController < ApplicationController
  def index
    @message_rooms = MessageRoom.all
  end

  def show
    @message_room = MessageRoom.find(params[:id])
  end

  def create
    @message_room = MessageRoom.new(message_room_params)

    if @message_room.save
      render json: @message_room
    else
      render json: @message_room, status: :unprocessable_entity
    end
  end

  private

  def message_room_params
    params.require(:message_room).permit!
  end
end