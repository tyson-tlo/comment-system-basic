import React from "react";
import Comment from "../interfaces/Comment";

interface CommentsContextType {
    state: CommentsState;
    dispatch: React.Dispatch<CommentsAction>;
}

interface CommentsState {
    comments: Comment[];
}

interface CommentsAction {
    type: string; 
    payload: any;
}

const CommentsContext = React.createContext({} as CommentsContextType);

function commentsReducer(state: CommentsState, action: CommentsAction) {
    switch(action.type) {
        case "addComment": {
            return {...state, comments: [...state.comments, action.payload]}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function CommentsProvider({ children }: { children: React.ReactNode}): JSX.Element {
    const [state, dispatch] = React.useReducer(commentsReducer, {
        comments: []
    })

    const value = { state, dispatch };

    return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>
}

export function useCommentsProvider() {
    const context = React.useContext(CommentsContext);

    if (context === undefined) {
        throw new Error("useCommentsProvider can only be used within a CommentsProvider");
    }

    return context;
}

export default CommentsProvider;