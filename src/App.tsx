import React, { useState } from 'react'
import { getUserRoles, assignUserRoles, removeUserRoles } from './auth0Api'

type Role = {
  id: string
  name: string
}

const App: React.FC = () => {
  const [userId, setUserId] = useState<string>('')
  const [roles, setRoles] = useState<Role[]>([])
  const [newRole, setNewRole] = useState<string>('')

  const fetchRoles = async () => {
    try {
      const fetchedRoles = await getUserRoles(userId)
      setRoles(fetchedRoles)
    } catch (error) {
      console.error('Error fetching roles:', error)
    }
  }

  const addRole = async () => {
    try {
      await assignUserRoles(userId, [newRole])
      await fetchRoles() // Refresh roles after assignment
    } catch (error) {
      console.error('Error assigning role:', error)
    }
  }

  const removeRole = async (roleId: string) => {
    try {
      await removeUserRoles(userId, [roleId])
      await fetchRoles() // Refresh roles after removal
    } catch (error) {
      console.error('Error removing role:', error)
    }
  }

  return (
    <div>
      <h1>Update Auth0 User Roles</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchRoles}>Fetch Roles</button>

      <div>
        <h2>User Roles:</h2>
        {roles.map((role) => (
          <div key={role.id}>
            {role.name}
            <button onClick={() => removeRole(role.id)}>Remove Role</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Add Role:</h2>
        <input
          type="text"
          placeholder="Enter Role ID"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button onClick={addRole}>Add Role</button>
      </div>
    </div>
  )
}

export default App
