class MessagesController < ApplicationController
  def create
    @message_room = MessageRoom.find(params[:message_room_id])
    @message = @message_room.messages.build(message_params)

    if @message.save
      render json: @message
    else
      render json: @message, status: :unprocessable_entity
    end
  end

  def destroy
    @message_room = MessageRoom.find(params[:message_room_id])
    @message = @message_room.messages.find(params[:id])

    @message.destroy

    head :ok
  end

  private

  def message_params
    params.require(:message).permit!
  end
end