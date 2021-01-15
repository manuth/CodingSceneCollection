/**
 * Represents a message sent by `Google Play Music Desktop Player`.
 */
export class Message
{
    /**
     * The subject of the message.
     */
    public channel: string;

    /**
     * The actual message.
     */
    public payload: object;
}
