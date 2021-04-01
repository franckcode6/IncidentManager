export interface Incident {
 id: number;
 titre: string;
 email: string;
 description: string;
 level: string;
 type: string;
 progress: number;
 open: boolean;
 dateCreation: Date;
 dateModification: Date;
}
