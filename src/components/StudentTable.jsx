import React from 'react';
import './StudentTable.css';

const StudentTable = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="no-data">Aucune donnée disponible.</div>;
    }

    return (
        <div className="table-wrapper">
            <h2 className="table-title">Liste des Étudiants</h2>
            <div className="table-container">
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Âge</th>
                            <th>Genre</th>
                            <th>Note</th>
                            <th>Filière</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.gender === 'Male' ? 'Masculin' : 'Féminin'}</td>
                                <td className="grade-cell">
                                    <span className={`grade-badge ${student.grade.toLowerCase()}`}>
                                        {student.grade}
                                    </span>
                                </td>
                                <td>{student.branche}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;